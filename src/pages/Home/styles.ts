import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  flex: 1;
  padding: 80px 20px;
  justify-content: space-around;
`;

export const Settings = styled.View`
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const SettingsPopup = styled.View`
  width: 80%;
  height: 50%;
  background-color: white;
  border: 1px solid black;
  border-radius: 20px;
  padding: 20px;
`;

export const FAB = styled.TouchableOpacity`
  background-color: #8020f0;
  height: 65;
  width: 65;
  border-radius: 65;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;
