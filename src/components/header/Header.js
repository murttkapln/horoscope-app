import HeaderStyle from "./Header.module.scss"

const Header = ()=>{
    return(
        <div className={HeaderStyle["header"]}>
            <span className={HeaderStyle["text-shadow"]}>Who Are You?</span>
        </div>
    )
}

export default Header