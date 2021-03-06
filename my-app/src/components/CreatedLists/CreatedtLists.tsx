import React, { useEffect } from 'react';
import { ListCreationForm } from './CreationForm';
import { Lists } from './Lists';
import { useDispatch, useSelector } from 'react-redux';
import { getCreatedListsRequested } from './store';
import { getCreatedListsUrl } from '../../API';
import i18n from 'i18next';
import { sessionID } from '../LogIn/store';

export const CreatedLists: React.FC = () => {
  const dispatch = useDispatch();
  const language = i18n.language;
  const id = useSelector(sessionID);
  const path = getCreatedListsUrl(language, id);

  useEffect(() => {
    dispatch(getCreatedListsRequested(path));
  }, [dispatch, path]);

  return (
    <div>
      <ListCreationForm />
      <Lists />
    </div>
  );
};
