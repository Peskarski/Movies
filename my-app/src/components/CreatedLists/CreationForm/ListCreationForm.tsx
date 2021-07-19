import React from 'react';
import { useForm } from 'react-hook-form';
import { StyledContainer, StyledButton, StyledInput } from './styles';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { useDispatch, useSelector } from 'react-redux';
import { createList } from '../store';
import { sessionID } from '../../LogIn/store';
import { FormData } from '../types';
import { getCreateListUrl, getCreatedListsUrl } from '../../../API';

export const ListCreationForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm();
  const { t } = useTranslation();
  const language = i18n.language;
  const dispatch = useDispatch();
  const id = useSelector(sessionID);

  const createListPath = getCreateListUrl(id);
  const createdListsPath = getCreatedListsUrl(language, id);

  const onSubmit = ({ name, description }: FormData) => {
    const listData = {
      name,
      description,
      language,
    };
    dispatch(createList({ createListUrl: createListPath, createdListsUrl: createdListsPath, listData }));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledContainer>
        <StyledInput placeholder={t('lists.name')} {...register('name')} />
        <StyledInput placeholder={t('lists.description')} {...register('description')} />
        <StyledButton type="submit">{t('lists.createList')}</StyledButton>
      </StyledContainer>
    </form>
  );
};
