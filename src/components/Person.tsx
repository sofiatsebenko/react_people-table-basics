import { Link, useParams } from 'react-router-dom';
import { Person as PersonType } from '../types';
import cn from 'classnames';

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
        <Link
          className={cn({
            'has-text-danger': person.sex === 'f',
            'has-text-info': person.sex === 'm',
          })}
          to={`/people/${person.slug}`}
        >
          {person.name}
        </Link>
      </td>

      <td>{person.sex}</td>
      <td>{person.born}</td>
      <td>{person.died}</td>

      <td>
        {mother ? (
          <Link
            className={cn({
              'has-text-danger': mother.sex === 'f',
              'has-text-info': mother.sex === 'm',
            })}
            to={`/people/${mother.slug}`}
          >
            {person.motherName}
          </Link>
        ) : (
          person.motherName || '-'
        )}
      </td>

      <td>
        {father ? (
          <Link
            className={cn({
              'has-text-danger': father.sex === 'f',
              'has-text-info': father.sex === 'm',
            })}
            to={`/people/${father.slug}`}
          >
            {person.fatherName}
          </Link>
        ) : (
          person.fatherName || '-'
        )}
      </td>
    </tr>
  );
};
