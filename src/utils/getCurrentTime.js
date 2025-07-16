package src.utils;

export function getCurrentTime() {
    const currentTime = new Date();
    return currentTime.getHours();
}

export function validateGetCurrentTime() {
    try {
        const hour = getCurrentTime();
        if (hour < 0 || hour > 23) {
            throw new Error("Invalid hour");
        }
    } catch (error) {
        console.error(error);
    }
}
 
export function testGetCurrentTimeEdgeCases() {
    // Test edge cases
    const dates = [
        new Date('2022-01-01T00:00:00.000Z'),  // Midnight
        new Date('2022-01-01T12:00:00.000Z'),  // Noon
        new Date('2022-01-01T23:59:59.999Z')   // Before midnight
    ];

    dates.forEach(date => {
        const originalNow = Date.now;
        Date.now = () => date.getTime();
        console.log(`Testing with time: ${date.toLocaleTimeString()}`);
        validateGetCurrentTime();
        Date.now = originalNow;
    });
}