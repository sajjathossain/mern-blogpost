import styles from './LoadingAnimation.module.scss'

const LoadingAnimation = () => {
    return (
        <>
           <div className={`${styles.ldsEllipsis}`}>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
            </div> 
        </>
    )
}

export default LoadingAnimation