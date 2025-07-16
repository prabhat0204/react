package src.utils;

export function getTimeBasedGreeting() {
    const currentHour = new Date().getHours();
    let greetingMessage;

    if (currentHour < 12) {
        greetingMessage = 'Good morning';
    } else if (currentHour < 18) {
        greetingMessage = 'Good afternoon';
    } else {
        greetingMessage = 'Good evening';
    }

    return greetingMessage;
}