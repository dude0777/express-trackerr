import logo from './assets/logomain.png'
import user from './assets/user.png'
import classes from './Header.module.css'
function Header() {
    return (
        <header className={classes.headercont}>
            <div className={classes.logocont}>
                <img src={logo} className={classes.logo} alt="" />

                <p className={classes.title}>Expense Tracker</p></div>
            <div className={classes.usercont}>
                <p className={classes.usertxt}>Hello, Alen</p>
                <img className={classes.userimg} src={user} alt="" /></div>

        </header>

    );
}

export default Header;