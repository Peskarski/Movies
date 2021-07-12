import React, { useState } from 'react';
import { StyledContainer, StyledButton, StyledInput } from './styles';
import { useTranslation } from 'react-i18next';

export const ListInput: React.FC = () => {
  const { t } = useTranslation();

  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  return (
    <StyledContainer>
      <StyledInput placeholder={t('lists.name')} value={name} onChange={handleNameChange} />
      <StyledInput placeholder={t('lists.description')} value={description} onChange={handleDescriptionChange} />
      <StyledButton>{t('lists.createList')}</StyledButton>
    </StyledContainer>
  );
};
