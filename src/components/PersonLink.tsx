import { Link } from 'react-router-dom';
import cn from 'classnames';
import { Person as PersonType } from '../types';

type Props = {
  person: PersonType;
};

export const PersonLink = ({ person }: Props) => {
  return (
    <Link
      className={cn({
        'has-text-danger': person.sex === 'f',
        'has-text-info': person.sex === 'm',
      })}
      to={`/people/${person.slug}`}
    >
      {person.name}
    </Link>
  );
};
