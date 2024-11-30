import styles from "./Btn_reusable.module.scss";

function btn_reusable({params}) {
    let onclick = ()=>{
        console.log('Say "my name is" and say your name');
    }
    return(
        <button className={styles.btn} onClick={onclick}>
            {params}
        </button>
    )
}
export default btn_reusable;