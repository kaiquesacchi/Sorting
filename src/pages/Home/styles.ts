import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  width: 100%;
`;

export const AnimationArea = styled.View`
  flex-direction: column;
  flex: 1;
  padding: 10px 20px;
  justify-content: space-around;
  background: #252525;
`;

export const Settings = {
  Background: styled.View`
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  `,

  Popup: styled.View`
    width: 80%;
    height: 50%;
    background-color: #252525;
    padding: 20px;
  `,

  Title: styled.Text`
    color: white;
    font-size: 20px;
    margin-bottom: 30px;
  `,

  Subtitle: styled.Text`
    color: #03dac4;
    font-size: 18px;
    margin-bottom: -5px;
  `,

  WhitePicker: styled.Picker`
    color: white;
    height: 50px;
    width: 100%;
  `
};
