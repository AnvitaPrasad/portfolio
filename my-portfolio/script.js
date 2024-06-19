document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch');

    // Function to toggle dark/light mode
    themeSwitch.addEventListener('change', () => {
        document.body.classList.toggle('light-mode');
    });

    // Tooltip functionality for tech icons
    const techIcons = document.querySelectorAll('.tech-icon');
    techIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            const tooltip = icon.getAttribute('data-tooltip');
            showTooltip(icon, tooltip);
        });
        icon.addEventListener('mouseleave', () => {
            hideTooltip(icon);
        });
    });

    // Tooltip functionality for social icons
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            const tooltip = icon.getAttribute('data-tooltip');
            showTooltip(icon, tooltip);
        });
        icon.addEventListener('mouseleave', () => {
            hideTooltip(icon);
        });
    });

    // Function to show tooltip
    function showTooltip(element, text) {
        const tooltipElement = document.createElement('div');
        tooltipElement.classList.add('tooltip');
        tooltipElement.textContent = text;
        document.body.appendChild(tooltipElement);

        const iconRect = element.getBoundingClientRect();
        const tooltipRect = tooltipElement.getBoundingClientRect();

        const tooltipTop = iconRect.top - tooltipRect.height - 10;
        const tooltipLeft = iconRect.left + iconRect.width / 2 - tooltipRect.width / 2;

        tooltipElement.style.top = `${tooltipTop}px`;
        tooltipElement.style.left = `${tooltipLeft}px`;

        element.setAttribute('data-tooltip-id', tooltipElement.id);
    }

    // Function to hide tooltip
    function hideTooltip(element) {
        const tooltipId = element.getAttribute('data-tooltip-id');
        if (tooltipId) {
            const tooltip = document.getElementById(tooltipId);
            if (tooltip) {
                tooltip.remove();
                element.removeAttribute('data-tooltip-id');
            }
        }
    }

    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Smooth scrolling for scroll-to-top button
    const scrollToTopButton = document.getElementById('scroll-to-top');
    if (scrollToTopButton) {
        scrollToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Show/hide scroll-to-top button on scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopButton.classList.add('show');
            } else {
                scrollToTopButton.classList.remove('show');
            }
        });
    }
});
