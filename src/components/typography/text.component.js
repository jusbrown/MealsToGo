import styled from "styled-components/native";

const defaultTextStyles = (theme) => `
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.regular};
    color: ${theme.colors.text.primary};
    flex-wrap: wrap;
    margin-top: 0px;
    margin-bottom: 0px;
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const label = (theme) => `
    font-size: ${theme.fontSizes.label};
    font-family: ${theme.fonts.heading};
    font-weight: ${theme.fontWeights.medium};
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const header = (theme) => `
    font-size: ${theme.fontSizes.header};
    font-weight: ${theme.fontWeights.bold};
`;

const error = (theme) => `
    color: ${theme.colors.text.error};
`;

const hint = (theme) => `
    font-size: ${theme.fontSize.body};
`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
  header,
};

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
