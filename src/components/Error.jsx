import { useDispatch, useSelector } from 'react-redux';
import { errorOff } from '../actions'
import '../css/Error.css';
function Error(){
  const error = useSelector(state => state.error)
  const dispatch = useDispatch();
  function handleclick(e){
    e.preventDefault()
    dispatch(errorOff())
  }
  return(
    <div className={error ? "Error" : 'ErrorOff'} >
        <h2 className={error ? 'on' : 'ErrorOff'}>При выполнении запроса произошла ошибка</h2>
        <p className={error ? 'on' : 'ErrorOff'}>Введите город правильно!</p>
        <button className={error ? 'on' : 'ErrorOff'} onClick={handleclick}>
          Ок
        </button>
    </div>
  )
}
export default Error