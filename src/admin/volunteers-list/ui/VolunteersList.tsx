import classNames from 'classnames';
import styles from './styles.module.scss';
import { useGetActiveVolunteersQuery, useGetPendingVolunteersQuery, useGetRejectedVolunteersQuery, useUpdateVolunteerStatusMutation, Volunteer } from '@/widgets/volunteers/api/api';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Modal } from '@/admin/modal';
import pencil from '@/shared/assets/images/icons/pencil.svg';
import details from '@/shared/assets/images/icons/details.png';
import { Breadcrumbs } from '@/features/breadcrumbs';

const VolunteersList = () => {
  const [activeRow, setActiveRow] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChangeStatus, setIsChangeStatus] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedVolunteer, setSelectedVolunteer] = useState<null | Volunteer>(null);
  const [activeBtn, setActiveBtn] = useState('');

  // const projects = useAppSelector(state => state.projects.projects);
  // error: pendingError, isLoading: pendingLoading,
  // error: activeError, isLoading: activeLoading,
  // error: rejectedError, isLoading: rejectedLoading,
  const navigate = useNavigate();
  const { data: pendingData, refetch: pendingRefetch } = useGetPendingVolunteersQuery({ page: 0, size: 50 });
  const { data: activeData, refetch: activeRefetch} = useGetActiveVolunteersQuery({ page: 0, size: 50 });
  const { data: rejectedData, refetch: rejectedRefetch } = useGetRejectedVolunteersQuery({ page: 0, size: 50 });
  const [volonteers, setVolunteers] = useState<Volunteer[]>();
    const [updateStatus, {isLoading: statusLoad}] = useUpdateVolunteerStatusMutation();

  const handleDetailsClick = (volunteer: Volunteer) => {
    setSelectedVolunteer(volunteer);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVolunteer(null);
  };

  const handleChangeStatus = (project: Volunteer) => {
    setSelectedVolunteer(project);
    setIsChangeStatus(true);
  }
  
  
  const handleUpdateStatus = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!selectedVolunteer || !selectedStatus) {
      alert("Будь ласка виберіть волонтера й статус");
      return;
    }

  const projectItem = {
    id: selectedVolunteer.id,
    status: selectedStatus,
  };

    try {
      await updateStatus(projectItem).unwrap();
      alert('Статус волонтера було успішно змінено');
      activeRefetch();
      pendingRefetch();
      rejectedRefetch();
      setVolunteers(undefined);
    } catch (error) {
      console.error('Failed to update volunteer status:', error);
    }
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <Breadcrumbs/>
        <h1 className={styles.title}>Волонтери</h1>
        <div className={styles.buttonsList}>
          <h5>Виберіть яких волонтерів ви будете дивитись:</h5>
          <div className={styles.btns}>
            <button
              onClick={() => { setVolunteers(activeData.content || []); setActiveBtn('ACTIVE') }}
              className={classNames(styles.btn, {[styles.btnActive] : activeBtn === 'ACTIVE'})}>
              Активні волонтери
            </button>
            <button
              onClick={() => { setVolunteers(pendingData?.content || []); setActiveBtn('PENDING') }}
              className={classNames(styles.btn, {[styles.btnActive] : activeBtn === 'PENDING'})}>
              Очікуючі волонтери
            </button>
            <button
              onClick={() => {setVolunteers(rejectedData?.content || []); setActiveBtn('REJECTED') }}
              className={classNames(styles.btn, {[styles.btnActive] : activeBtn === 'REJECTED'})}>
              Відхилені волонтери
            </button>
          </div>
        </div>
        {volonteers ? (<table className={styles.table}>
        <thead>
        <tr>
        <th>Ім'я</th>
            <th>Прізвище</th>
              <th>По-батькові</th>
              <th>Статус</th>
            <th>Деталі</th>
            <th>Змінити статус</th>
            </tr>
        </thead>
        
        {volonteers.map((item: Volunteer) => (
          <tr
            key={item.id}
            onClick={() => setActiveRow(item.id)}
            className={classNames(styles.row, { [styles.rowActive]: activeRow === item.id })}
          >
              <td>{item.firstName}</td>
              
              <td>{item.lastName}</td>
              <td>{item.middleName}</td>
            <td>{item.status}</td>
            <td style={{cursor: 'pointer'}} onClick={() => handleDetailsClick(item)}><img src={details} alt="" className={styles.icon}/></td>
            <td style={{cursor: 'pointer'}} onClick={() => handleChangeStatus(item)}><img src={pencil} alt="" className={styles.icon}/></td>
          </tr>
          
        ))}
        </table>) : (<h2>Волонтерів ще немає</h2>)}
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedVolunteer && (
            <div>
              <div className={styles.modalRow}>
                <h5 style={{ color: 'black' }}>Ім'я:</h5>
                <p style={{fontWeight: 500}}>{selectedVolunteer.firstName}</p>
              </div>
              <div className={styles.modalRow}>
                <h5 style={{ color: 'black' }}>Прізвище:</h5>
                <p style={{fontWeight: 500}}>{selectedVolunteer.lastName}</p>
              </div>
              <div className={styles.modalRow}>
                <h5 style={{ color: 'black' }}>По-батькові:</h5>
                <p style={{fontWeight: 500}}>{selectedVolunteer.middleName}</p>
              </div>
              <div className={styles.modalRow}>
                <h5 style={{ color: 'black' }}>Зображення:</h5>
                <img style={{ width: '180px', borderRadius: '15px'}} src={selectedVolunteer.avatarUrl} />
              </div>
              <div className={styles.modalRow}>
                <h5 style={{ color: 'black' }}>Пошта:</h5>
                <p>{selectedVolunteer.email}</p>
              </div>
              <div className={styles.modalRow}>
                <h5 style={{ color: 'black' }}>Номер телефону:</h5>
                <p>{selectedVolunteer.phoneNumber}</p>
              </div>
              <div className={styles.modalRow}>
                <h5 style={{ color: 'black' }}>Статус</h5>
                <p>{selectedVolunteer.status}</p>
              </div>
              
              
          </div>
        )}
          </Modal>
          
          {isChangeStatus && <form className={styles.form} onSubmit={handleUpdateStatus}>
                            <h5>Виберіть статус волонтера:</h5>
                            <div className={styles.item}>
                      <label style={{ display: 'flex', justifyContent: 'space-around'}}>
                                Статус вибраного волонтера:
                              <p>{selectedVolunteer?.status}</p>
                              </label>
                            </div>
                            
                            
                          <select value={selectedStatus}
                            onChange={(e) =>
                                setSelectedStatus(e.target.value)
                            }>
                              
                              <option value="">Виберіть статус, щоб змінити його</option>
                              <option value="ACTIVE">Активний</option>
                              <option value="PENDING">В Очікуванні</option>
                              <option value="REJECTED">Відмовлено</option>
                          </select>
                            <button disabled={statusLoad} className={styles.btn}>{statusLoad? 'Змінення...' : 'Змінити статус'}</button>
                  
                          </form>}
        
        <button  className={styles.btn} onClick={() => navigate('/admin/volunteers/create')}>Створити волонтера</button>
      </div>
      </div>
    </section>
  );
}
 
export default VolunteersList;