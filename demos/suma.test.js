//IMPORT DE LO QUE QUEREMOS TESTEAR
import suma from './suma';

//ZONA DE TESTEO

describe('función suma', () => {
    describe('Suma de valores postivos', () => {
        it('suma de valores 0 y 0 es 0', () => {
            expect(suma(0, 0)).toBe(0);
        });
        //Podemos anidar describes, pero no it o test
        test('sumar 1 + 2 es igual a 3', () => {
            expect(suma(1, 2)).toEqual(3); //toEqual() es lo mismo que toBe()
        });

        test('sumar 11 + 22 es igual a 33', () => {
            expect(suma(11, 22)).toBe(33);
        });
        //toBeClosed(valor, númer decimales) es para trabajar con decimales aproximados
        it('sumar 0.1 + 0.2 es igual a 0.3', () => {
            expect(suma(0.1, 0.2)).toBeCloseTo(0.3, 9);
        });
        it('sumar 1.100000 + 2.230404 es igual a 3.33', () => {
            expect(suma(1.1, 2.230404)).toBeCloseTo(3.33, 2);
            expect(suma(1.1, 2.230404)).not.oBeCloseTo(3.33, 5);
        });

        it('sumar 1 + 2 es mayor que 2', () => {
            expect(suma(1, 2)).toBeGreaterThan(2);
        });

        it('sumar 1 + 2 es mayor o igual que 3', () => {
            expect(suma(1, 2)).toBeGreaterThanOrEqual(3);
        });
        //toBeTruthy es lo mismo que toBe(true)
    });

    // .skip permite saltarnos tests o fragmentos de test
    // . only cambia la lógica de ejecución de jest haciendo que sólo se ejecuten los only.
    describe.skip('Suma de valores negativos', () => {
        it('sumar -1 + -2 es igual a -3', () => {
            expect(suma(-1, -2)).toBe(-3);
        });

        it('sumar -11 + -22 es igual a -33', () => {
            expect(suma(-11, -22)).toBe(-33);
        });
    });
    describe('Sumar valore spositivos y negativos', () => {
        it.todo('sumar 1 y -1 es 0');
    });
});
