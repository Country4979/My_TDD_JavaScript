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
            expect(suma(1, 2)).toBe(3);
        });

        test('sumar 11 + 22 es igual a 33', () => {
            expect(suma(11, 22)).toBe(33);
        });
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
