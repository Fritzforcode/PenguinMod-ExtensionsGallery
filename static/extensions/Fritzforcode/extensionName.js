(function (Scratch) {
    'use strict';

    class GravitySimulation {
        constructor() {
            this.G = 6.67430e-11;  // Universal gravitational constant in m^3⋅kg^−1⋅s^−2
        }

        // Calculate the gravitational force between two objects
        calculateGravity(args) {
            const mass1 = args.MASS1;
            const mass2 = args.MASS2;
            const distance = args.DISTANCE;

            if (distance === 0) {
                return 0;
            }

            // Newton's law of universal gravitation
            const force = (this.G * mass1 * mass2) / (distance * distance);
            return force;
        }

        // Move an object by applying the gravitational force (acceleration)
        moveObject(args) {
            const force = args.FORCE;
            const mass = args.MASS;
            const time = args.TIME;
            
            // F = ma, therefore a = F / m
            const acceleration = force / mass;
            const velocity = acceleration * time;
            return velocity;  // Velocity after applying the force over the time period
        }
    }

    Scratch.extensions.register(new GravitySimulation(), {
        id: 'gravitySimulation',
        name: 'Gravity Simulation',
        blocks: [
            {
                opcode: 'calculateGravity',
                blockType: Scratch.BlockType.REPORTER,
                text: 'gravity force between mass1 [MASS1] kg and mass2 [MASS2] kg at distance [DISTANCE] meters',
                arguments: {
                    MASS1: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
                    MASS2: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
                    DISTANCE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 }
                }
            },
            {
                opcode: 'moveObject',
                blockType: Scratch.BlockType.REPORTER,
                text: 'move object with mass [MASS] kg with force [FORCE] N over [TIME] seconds',
                arguments: {
                    MASS: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
                    FORCE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
                    TIME: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 }
                }
            }
        ]
    });
})(Scratch);

