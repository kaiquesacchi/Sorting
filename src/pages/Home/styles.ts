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

export const Settings = styled.View`
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const SettingsPopup = styled.View`
  width: 80%;
  height: 50%;
  background-color: #252525;
  padding: 20px;
`;

export const FAB = styled.TouchableOpacity`
  background-color: #8020f0;
  height: 65px;
  width: 65px;
  border-radius: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;
