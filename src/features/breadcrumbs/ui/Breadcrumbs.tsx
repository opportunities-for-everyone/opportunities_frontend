import { Link, useLocation } from "react-router-dom";
import styles from './styles.module.scss';
function localization(str: string) {
  switch (str) {
    case 'admin':
      return 'Адмін';
    case 'news':
      return 'Новини';
    case 'create':
      return 'Створення';
    case 'update':
      return 'Оновлення';
    case 'profile':
      return 'Профіль';
    case 'users':
      return 'користувачі';
    case 'projects':
      return 'Проєкти';
    case 'volunteers':
      return 'Волонтери';
    case 'partners':
      return 'Партнери';
    case 'donations':
      return 'Донати';
    default:
      return '';
  }
}
const Breadcrumbs = () => {
  const location = useLocation();


  let currentLink = '';

  const crumbs = location.pathname.split('/').filter(crumb => crumb !== '').map(crumb => {
    currentLink += `/${crumb}`

    return (
      <div className={styles.crumb}>
        <Link to={currentLink}>{localization(crumb)}</Link>
      </div>
    )
  })
  return (
    <div className={styles.breadcrumbs}>
      {crumbs}
    </div>
   );
}
 
export default Breadcrumbs;