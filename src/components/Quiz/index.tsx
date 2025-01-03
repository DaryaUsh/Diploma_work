import style from './style.module.css';
import quiz from '../../images/Quiz/quiz.jpg';

const Quiz = () => {
    return (
        <div id="quiz" className={style.container}>
            <img className={style.imgQuiz} src={quiz} alt="" />
        </div>
    );
};

export default Quiz;