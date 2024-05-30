options: {
    presets: [
        ['@babel/preset-env', {
            targets: "> 0.25%, not dead" // Especifica que deve ser compatível com navegadores que têm mais de 0,25% de uso e que não estão descontinuados
        }]
    ]
}
