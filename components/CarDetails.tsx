import { CarProps } from '@/types';
import React from 'react';
interface CarDetailsProps {
    IsOpen: boolean;
    closeModal: () => void;
    car: CarProps;
}
const CarDetails = ({IsOpen, closeModal, car}:CarDetailsProps) => {
  return (
    <div>
      
    </div>
  );
}

export default CarDetails;
