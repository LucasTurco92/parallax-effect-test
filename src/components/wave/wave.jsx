import styles from './wave.module.scss';

const Wave = ({color}) =>
{
    const filler ={
        containerFirst:"#fff",
        containerSecond:"#0099ff",
        containerThird:"#fff",
        containerFourth:"#0099ff",
    } 

    return(<div  className={styles.container}>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={filler[color]} fillOpacity="1" d="M0,224L48,208C96,192,192,160,288,128C384,96,480,64,576,80C672,96,768,160,864,202.7C960,245,1056,267,1152,261.3C1248,256,1344,224,1392,208L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>        
        </div>)
}

export default Wave;