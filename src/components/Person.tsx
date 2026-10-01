import { useParams } from 'react-router-dom';
import cn from 'classnames';
import { Person as PersonType } from '../types';
import { PersonLink } from './PersonLink';

type Props = {
  person: PersonType;
  people: PersonType[];
};

export const Person = ({ person, people }: Props) => {
  const { slug } = useParams();

  const mother = people.find(m => person.motherName === m.name);
  const father = people.find(f => person.fatherName === f.name);

  return (
    <tr
      data-cy="person"
      className={cn({
        'has-background-warning': slug === person.slug,
      })}
    >
      <td>
        <PersonLink person={person} />
      </td>

      <td>{person.sex}</td>
      <td>{person.born}</td>
      <td>{person.died}</td>

      <td>
        {mother ? (
          <PersonLink person={mother} />
        ) : (
          person.motherName || '-'
        )}
      </td>

      <td>
        {father ? (
          <PersonLink person={father} />
        ) : (
          person.fatherName || '-'
        )}
      </td>
    </tr>
  );
};
