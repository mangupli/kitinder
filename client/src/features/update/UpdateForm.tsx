import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Person from '../../types/Person';

type UpdateFormProps = {
  person: Person;
};

export default function UpdateForm({ person }: UpdateFormProps): JSX.Element {
  const { register, handleSubmit } = useForm<Partial<Person>>({
    defaultValues: {
      name: person.name,
      profilePic: person.profilePic,
      shadow: person.shadow ? person.shadow : '',
      details: person.details ? person.details : '',
      description: person.description ? person.description : '',
    },
  });

  const onSubmit: SubmitHandler<Partial<Person>> = async (data) => {
    try {
      const res = await fetch(`/api/people/${person.id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const updatedPerson = await res.json();
      console.log(updatedPerson);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="имя" {...register('name', { required: true })} />
      <input placeholder="картинка профиля" {...register('profilePic')} />
      <input placeholder="shadow" {...register('shadow')} />
      <textarea placeholder="описание профиля" {...register('description')} />
      <input placeholder="дополнительно" {...register('details')} />
      <button type="submit"> Сохранить изменения </button>
    </form>
  );
}
