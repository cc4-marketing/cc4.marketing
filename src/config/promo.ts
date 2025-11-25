/**
 * Promo Configuration
 * Toggle these to enable/disable promotional components
 */

export const promoConfig = {
    // Hello Bar (top banner)
    helloBar: {
        enabled: true,  // Set to false to disable
        text: "Black Friday Deal:",
        linkText: "50% off ClaudeKit.cc",
        linkUrl: "https://claudekit.cc/?ref=BIZE9CYY",
        storageKey: "hellobar-bf-2024"  // Change this to reset dismissals
    },

    // Floating Side Banner (appears on scroll)
    floatingBanner: {
        enabled: true,  // Set to false to disable
        title: "Black Friday",
        subtitle: "50% off ClaudeKit.cc",
        linkText: "Grab Deal",
        linkUrl: "https://claudekit.cc/?ref=BIZE9CYY",
        triggerPercent: 70  // Show when scrolled 70% down
    }
};
