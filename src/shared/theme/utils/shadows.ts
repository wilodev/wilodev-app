import { colors } from './colors';

export const hardShadow = {
  '1': {
    shadowColor: colors.black,
    shadowOffset: {
      width: -2,
      height: 2,
    },
    shadowOpacity: 8,
    shadowRadius: 0.5,
    elevation: 10,
  },
  '2': {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 8,
    shadowRadius: 0.5,
    elevation: 10,
  },
  '3': {
    shadowColor: colors.black,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 8,
    shadowRadius: 0.5,
    elevation: 10,
  },
  '4': {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 8,
    shadowRadius: 0.5,
    elevation: 10,
  },
  '5': {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 8,
    shadowRadius: 0.2,
    elevation: 10,
  },
};

export const softShadow = {
  '1': {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 10,
    shadowRadius: 0.1,
    _android: {
      shadowColor: colors.black,
      elevation: 5,
      shadowOpacity: 0.05,
    },
  },
  '2': {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 3,
    _android: {
      shadowColor: colors.black,
      elevation: 10,
      shadowOpacity: 0.1,
    },
  },
  '3': {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 30,
    shadowOpacity: 0.1,
    elevation: 4,
    _android: {
      shadowColor: colors.black,
      elevation: 15,
      shadowOpacity: 0.15,
    },
  },
  '4': {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 40,
    shadowOpacity: 0.1,
    elevation: 10,
    _android: {
      shadowColor: colors.black,
      elevation: 20,
      shadowOpacity: 0.2,
    },
  },
};
