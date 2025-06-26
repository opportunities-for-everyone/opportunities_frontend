import { Link, useLocation } from "react-router-dom";
import styles from './styles.module.scss';
const Breadcrumbs = () => {
  const location = useLocation();

  let currentLink = '';

  const crumbs = location.pathname.split('/').filter(crumb => crumb !== '').map(crumb => {
    currentLink += `/${crumb}`

    return (
      <div className={styles.crumb}>
        <Link to={currentLink}>{crumb[0].toUpperCase() + crumb.slice(1)}</Link>
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