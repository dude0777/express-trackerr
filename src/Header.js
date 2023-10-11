import logo from './assets/logomain.png'
import user from './assets/user.png'
import classes from './Header.module.css'
function Header() {
    return (
        <header class={classes.headercont}>
            <div class={classes.logocont}>
                <img src={logo} class={classes.logo} alt="" />

                <p className={classes.title}>Expense Tracker</p></div>
            <div class={classes.usercont}>
                <p className={classes.usertxt}>Hello, Alen</p>
                <img class={classes.userimg} src={user} alt="" /></div>

        </header>

    );
}

export default Header;