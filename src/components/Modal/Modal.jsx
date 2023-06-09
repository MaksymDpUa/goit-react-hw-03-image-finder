import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export class Modal extends Component {
    state = {
    }
    componentDidMount() {
        window.addEventListener('keydown', this.handlePressEsc);
        
    }
 
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handlePressEsc)
    }
    
    handleOverlayClick = (e) => {

        if (e.currentTarget === e.target) {
     this.props.closeModal()
}
    }

    handlePressEsc = (e) => {
        if (e.key === 'Escape') {
            this.props.closeModal()
        }
    }
    

    render() {
        return <div className={css.overlay} onClick={this.handleOverlayClick}>
            <div className={css.modal}>
                <img src={this.props.largeImage} alt={this.props.alt} className={css.image} />
            </div>
        </div>
    }
}

Modal.propTypes = {    
    alt: PropTypes.string,
    closeModal: PropTypes.func,
    largeImage: PropTypes.string,
}





