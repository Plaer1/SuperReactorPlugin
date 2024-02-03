/**
 * @name Super Reactor
 * @author Plær1â€™
 * @description Makes sure all your reactions are super! (Will NOT let you use super reactions unless you have Nitro!) (does not activate via keyboard navigation yet.)
 * @version 1.1.1
 * @authorLink https://github.com/Plaer1
 * @website https://github.com/Plaer1/
 * @source https://raw.githubusercontent.com/Plaer1/
 */

module.exports = class SuperReactor {
    start() {
        // Initialize both mouse and keyboard event listeners
        this.initEventListeners();
    }

    stop() {
        // Remove event listeners when the plugin is stopped
        document.removeEventListener('mousemove', this.handleEvent);
        document.removeEventListener('keydown', this.handleEvent);
    }

    initEventListeners() {
        // Shared event handler for both mouse and keyboard
        this.handleEvent = (event) => {
            // Check if the event is a keydown event for arrow keys or any mouse movement
            if (event.type === 'mousemove' || (event.type === 'keydown' && ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key))) {
                this.clickSuperReact();
            }
        };

        document.addEventListener('mousemove', this.handleEvent);
        document.addEventListener('keydown', this.handleEvent);
    }

    clickSuperReact() {
        setTimeout(function() {
            const targetElement = document.querySelector('.burstToggle__5e176');
            if (targetElement) {
                const firstChild = targetElement.firstElementChild;
                if (!(firstChild && firstChild.getAttribute('aria-label') === 'Super Reactions enabled')) {
                    document.querySelector('.label_ee78c3').click();                }
            }
        }, 55);
    }
}
