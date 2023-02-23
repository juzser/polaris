type ColorScale =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

type Color = {
  [Scale in ColorScale]: string;
};

export const gray: Color = {
  50: 'rgba(255, 255, 255, 1)',
  100: 'rgba(249, 250, 251, 1)',
  200: 'rgba(241, 242, 244, 1)',
  300: 'rgba(235, 236, 239, 1)',
  400: 'rgba(221, 224, 228, 1)',
  500: 'rgba(202, 206, 211, 1)',
  600: 'rgba(171, 177, 186, 1)',
  700: 'rgba(135, 144, 155, 1)',
  800: 'rgba(97, 106, 117, 1)',
  900: 'rgba(31, 33, 36, 1)',
};

export const green: Color = {
  50: 'rgba(240, 253, 248, 1)',
  100: 'rgba(224, 248, 238, 1)',
  200: 'rgba(192, 242, 221, 1)',
  300: 'rgba(161, 237, 208, 1)',
  400: 'rgba(80, 220, 169, 1)',
  500: 'rgba(35, 196, 140, 1)',
  600: 'rgba(22, 166, 121, 1)',
  700: 'rgba(0, 122, 92, 1)',
  800: 'rgba(18, 84, 67, 1)',
  900: 'rgba(12, 59, 47, 1)',
};

export const blue: Color = {
  50: 'rgba(240, 245, 253, 1)',
  100: 'rgba(232, 240, 253, 1)',
  200: 'rgba(187, 212, 247, 1)',
  300: 'rgba(147, 186, 241, 1)',
  400: 'rgba(102, 153, 225, 1)',
  500: 'rgba(62, 125, 213, 1)',
  600: 'rgba(36, 99, 188, 1)',
  700: 'rgba(20, 73, 149, 1)',
  800: 'rgba(14, 53, 108, 1)',
  900: 'rgba(16, 41, 76, 1)',
};

export const red: Color = {
  50: 'rgba(254, 243, 241, 1)',
  100: 'rgba(253, 226, 221, 1)',
  200: 'rgba(251, 197, 188, 1)',
  300: 'rgba(247, 148, 130, 1)',
  400: 'rgba(245, 107, 82, 1)',
  500: 'rgba(242, 65, 34, 1)',
  600: 'rgba(197, 40, 12, 1)',
  700: 'rgba(159, 32, 10, 1)',
  800: 'rgba(115, 24, 7, 1)',
  900: 'rgba(67, 14, 4, 1)',
};

export const yellow: Color = {
  50: 'rgba(254, 248, 236, 1)',
  100: 'rgba(252, 240, 212, 1)',
  200: 'rgba(250, 229, 178, 1)',
  300: 'rgba(248, 217, 144, 1)',
  400: 'rgba(245, 196, 82, 1)',
  500: 'rgba(242, 179, 34, 1)',
  600: 'rgba(216, 155, 13, 1)',
  700: 'rgba(183, 126, 11, 1)',
  800: 'rgba(135, 92, 8, 1)',
  900: 'rgba(77, 46, 5, 1)',
};

export const teal: Color = {
  50: 'rgba(238, 250, 251, 1)',
  100: 'rgba(222, 245, 247, 1)',
  200: 'rgba(184, 233, 239, 1)',
  300: 'rgba(147, 222, 231, 1)',
  400: 'rgba(109, 211, 222, 1)',
  500: 'rgba(59, 195, 211, 1)',
  600: 'rgba(42, 172, 187, 1)',
  700: 'rgba(32, 130, 141, 1)',
  800: 'rgba(23, 92, 100, 1)',
  900: 'rgba(16, 65, 71, 1)',
};

export const orange: Color = {
  50: 'rgba(254, 243, 236, 1)',
  100: 'rgba(253, 231, 217, 1)',
  200: 'rgba(250, 201, 168, 1)',
  300: 'rgba(247, 177, 130, 1)',
  400: 'rgba(245, 147, 82, 1)',
  500: 'rgba(242, 117, 34, 1)',
  600: 'rgba(216, 101, 13, 1)',
  700: 'rgba(164, 76, 10, 1)',
  800: 'rgba(111, 52, 7, 1)',
  900: 'rgba(77, 36, 5, 1)',
};

export const purple: Color = {
  50: 'rgba(242, 237, 253, 1)',
  100: 'rgba(236, 227, 253, 1)',
  200: 'rgba(226, 214, 250, 1)',
  300: 'rgba(203, 180, 248, 1)',
  400: 'rgba(173, 139, 241, 1)',
  500: 'rgba(121, 69, 227, 1)',
  600: 'rgba(90, 36, 205, 1)',
  700: 'rgba(67, 21, 158, 1)',
  800: 'rgba(49, 13, 120, 1)',
  900: 'rgba(36, 8, 73, 1)',
};
