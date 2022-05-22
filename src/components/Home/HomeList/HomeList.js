import s from './HomeList.module.css';

export default function HomeList({ children }) {
  return <ul className={s.filmList}>{children}</ul>;
}
