const speeds = {
    '100': 100,
    // '200': xxx,
    '300': 250,
    // '400': xxx,
    '500': 500,
    // '600': xxx,
    '700': 1000,
    // '800': xxx,
    '900': 2000,
};

export default (speed = 500) => speeds[speed];
