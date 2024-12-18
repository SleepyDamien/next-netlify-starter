import { useState } from 'react';
import styles from './Header.module.css';
import { GiWyvern } from "react-icons/gi";


export default function Header() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false); // For mobile menu

    // Toggle dropdown menu visibility
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    // Toggle mobile menu visibility
    const toggleMobileMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.navbar}>
                {/* Logo in the center */}
                <div className={styles.logo}>
                    <a href="#"><GiWyvern /> TechDragon</a>
                </div>

                {/* Right section with dropdown */}
                <div className={styles.rightSection}>
                    {/* Dropdown for desktop */}
                    <div className={`${styles.dropdown} ${isDropdownOpen ? styles.open : ''}`}>
                        <button onClick={toggleDropdown} className={styles.dropdownButton}>
                            Menu
                        </button>
                        <div className={styles.dropdownContent}>
                            <a href="#" className={styles.dropdownLink}>Link 1</a>
                            <a href="#" className={styles.dropdownLink}>Link 2</a>
                            <a href="#" className={styles.dropdownLink}>Link 3</a>
                        </div>
                    </div>

                    {/* Hamburger Menu for mobile */}
                    <div className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`} onClick={toggleMobileMenu}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
                <a href="#" className={styles.mobileMenuLink}>Link 1</a>
                <a href="#" className={styles.mobileMenuLink}>Link 2</a>
                <a href="#" className={styles.mobileMenuLink}>Link 3</a>
            </div>
        </header>
    );
}
