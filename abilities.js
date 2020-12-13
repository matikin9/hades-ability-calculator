const ABILITY_DATA = [
    {
        row: '01',
        a: {
            name: 'Shadow Presence',
            description: 'Each rank gives you +10% damage when you strike foes from behind.',
            ranks: [
                {
                    costNext: 10,
                    costTotal: 0,
                    benefit: '+0%'
                }, {
                    costNext: 15,
                    costTotal: 10,
                    benefit: '+10%'
                }, {
                    costNext: 20,
                    costTotal: 25,
                    benefit: '+20%'
                }, {
                    costNext: 25,
                    costTotal: 45,
                    benefit: '+30%'
                }, {
                    costNext: 30,
                    costTotal: 70,
                    benefit: '+40%'
                }, {
                    costNext: 0,
                    costTotal: 100,
                    benefit: '+50%'
                }
            ]
        },
        b: {
            name: 'Fiery Presence',
            description: 'Each rank makes you deal 15% damage when you strike undamaged foes.',
            ranks: [
                {
                    costNext: 10,
                    costTotal: 0,
                    benefit: '0%'
                }, {
                    costNext: 15,
                    costTotal: 10,
                    benefit: '15%'
                }, {
                    costNext: 20,
                    costTotal: 25,
                    benefit: '30%'
                }, {
                    costNext: 25,
                    costTotal: 45,
                    benefit: '45%'
                }, {
                    costNext: 30,
                    costTotal: 70,
                    benefit: '60%'
                }, {
                    costNext: 0,
                    costTotal: 100,
                    benefit: '75%'
                },
            ]
        }
    }, {
        row: '02',
        a: {
            name: 'Chthonic Vitality',
            description: 'Each rank restores 1 health when you enter each chamber.',
            ranks: [
                {
                    costNext: 10,
                    costTotal: 0,
                    benefit: '0'
                }, {
                    costNext: 20,
                    costTotal: 10,
                    benefit: '1'
                }, {
                    costNext: 40,
                    costTotal: 30,
                    benefit: '2'
                }, {
                    costNext: 0,
                    costTotal: 70,
                    benefit: '3'
                }
            ]
        },
        b: {
            name: 'Dark Regeneration',
            description: 'Each rank makes +30% of any shadow you collect restore your health by that much.',
            ranks: [
                {
                    costNext: 30,
                    costTotal: 0,
                    benefit: '0%'
                }, {
                    costNext: 60,
                    costTotal: 30,
                    benefit: '30%'
                }, {
                    costNext: 0,
                    costTotal: 90,
                    benefit: '60%'
                }
            ]
        }
    }, {
        row: '03',
        a: {
            name: 'Death Defiance',
            description: 'Each rank restores you for 50% health 1 time when your Life Total is depleted.',
            ranks: [
                {
                    costNext: 30,
                    costTotal: 0,
                    benefit: '0'
                }, {
                    costNext: 500,
                    costTotal: 30,
                    benefit: '1'
                }, {
                    costNext: 1000,
                    costTotal: 530,
                    benefit: '2'
                }, {
                    costNext: 0,
                    costTotal: 1530,
                    benefit: '3'
                }
            ]
        },
        b: {
            name: 'Stubborn Defiance',
            description: 'This restores you to 30% health 1 time per chamber when your Life Total is depleted.',
            ranks: [
                {
                    costNext: 600,
                    costTotal: 0,
                    benefit: '0'
                }, {
                    costNext: 0,
                    costTotal: 600,
                    benefit: '1'
                }
            ]
        }
    }, {
        row: '04',
        a: {
            name: 'Greater Reflex',
            description: 'Each rank lets you chain +1 Dash before briefly recovering.',
            ranks: [
                {
                    costNext: 50,
                    costTotal: 0,
                    benefit: '0'
                }, {
                    costNext: 0,
                    costTotal: 50,
                    benefit: '1'
                }
            ]
        },
        b: {
            name: 'Ruthless Reflex',
            description: 'If you Dash just before getting hit, gain +50% damage and dodge chance for 2 Sec.',
            ranks: [
                {
                    costNext: 75,
                    costTotal: 0,
                    benefit: 0
                }, {
                    costNext: 0,
                    costTotal: 75,
                    benefit: 1
                }
            ]
        }
    }
];