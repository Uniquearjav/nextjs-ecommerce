import {MouseEvent} from 'react';
import Link from 'next/link';
import HeaderCart from './cart/HeaderCart';
import ChooseVariantModal from './header/ChooseVariantModal';
// import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import {setIsOpened} from '../redux/reducers/asideMenu';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons/faPhoneAlt';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import {RootState} from '../redux/store';
import clsx from 'clsx';

export default function Header() {
	const dispatch = useAppDispatch();
	const asideIsOpened = useAppSelector((state: RootState) => state.asideMenu.isOpened);
	const onHamburgerBtnClicked = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		dispatch(setIsOpened(true));
	};

	return (
		<header className='page-header'>
			<div className='page-header__phones-row'>
				<div className='container page-header__phones-container'>
					<ul className='page-header__menu list-unstyled'>
						<li>
							<Link href={'/shipping'} className='page-header__phone-link'>
								Shipping
							</Link>
						</li>
						<li>
							<Link href={'/about'} className='page-header__phone-link'>
								About
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className={'page-header__logo-row'}>
				<div className='container page-header__logo-container'>
					<div className={'page-header__logo-wrapper'}>
						<Link href='/' className={'page-header__logo-link'}>
							<span>HORIZAURA</span>
						</Link>
					</div>
					<div className={'page-header__right-blocks'}>
						<HeaderCart className={'page-header__moon-cart'} />
						<button type={'button'}
										className={'hamburger-btn page-header__hamburger'}
										onClick={onHamburgerBtnClicked}
						>
							<span className={clsx('hamburger-btn__bar', {'first-opened': asideIsOpened})} />
							<span className={clsx('hamburger-btn__bar', {'middle-opened': asideIsOpened})} />
							<span className={clsx('hamburger-btn__bar', {'last-opened': asideIsOpened})} />
						</button>
					</div>
				</div>
			</div>
			<ChooseVariantModal />
		</header>
	);
}
