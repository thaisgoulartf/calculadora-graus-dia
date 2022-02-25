import { useContext } from 'react';
import { CulturaContext } from '../contexts/CulturaContext';

export function useCultura() {
    const value = useContext(CulturaContext)

    return value;
}
