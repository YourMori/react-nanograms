import React, { useState, useEffect } from 'react';
import nanograms from '../Api/Nanograms.json';

interface Nanogram {
    title: string;
    width: number;
    height: number;
    rows: number[][];
    columns: number[][];
    solution: number[][];
}

const Play: React.FC = () => {
    const [newPlay, setNewPlay] = useState(false);

    const [grid, setGrid] = useState<number[][]>([]);
    const [randomNanogram, setRandomNanogram] = useState<Nanogram | null>(null);

    const onPlayClick = () => {
        setNewPlay(!newPlay)
    }

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * nanograms.length);
        const nanogram = nanograms[randomIndex];
        setRandomNanogram(nanogram);
        const initialGrid: number[][] = Array(nanogram.height)
            .fill(null)
            .map(() => Array(nanogram.width).fill(0));

        setGrid(initialGrid);
    }, [newPlay]);

    const handleCellClick = (e: React.MouseEvent, row: number, col: number) => {
        e.preventDefault();
        const newGrid = grid.map((r, rowIndex) =>
            r.map((cell, colIndex) => {
                if (rowIndex === row && colIndex === col) {
                    if (e.type === 'click') {
                        return cell === 1 ? 0 : 1; // Toggle between 0 and 1 on left click
                    } else if (e.type === 'contextmenu') {
                        return cell === 2 ? 0 : 2; // Toggle between 0 and 2 on right click
                    }
                }
                return cell;
            })
        );
        setGrid(newGrid);
    };

    const checkSolution = () => {
        if (!randomNanogram) return false;
        for (let row = 0; row < randomNanogram.height; row++) {
            for (let col = 0; col < randomNanogram.width; col++) {
                if (grid[row][col] === 2) continue; // Ignore cells marked with red
                if (grid[row][col] !== randomNanogram.solution[row][col]) {
                    return false;
                }
            }
        }
        return true;
    };

    const isCorrect = checkSolution();

    if (!randomNanogram) return <div>Loading...</div>;

    return (
        <div className='play'>
            <div className='nanograms'>
                <h1>{randomNanogram.title}</h1>
                <div className='grid-wrapper'>
                    <div className='labels-col'>
                        {randomNanogram.rows.map((row, rowIndex) => (
                            <div key={rowIndex} className='row-label'>
                                {row.join(' ')}
                            </div>
                        ))}
                    </div>
                    <div>
                        <div className='labels-row'>
                            {randomNanogram.columns.map((col, colIndex) => (
                                <div key={colIndex} className='col-label'>
                                    {col.map((number, index) => (
                                        <div key={index}>{number}</div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <div className='grid-container'>
                            {randomNanogram.rows.map((row, rowIndex) => (
                                <div key={rowIndex} className='row'>
                                    {grid[rowIndex].map((cell, colIndex) => (
                                        <div
                                            key={colIndex}
                                            className={`cell ${cell === 1 ? 'filled' : cell === 2 ? 'marked' : ''}`}
                                            onClick={(e) => handleCellClick(e, rowIndex, colIndex)}
                                            onContextMenu={(e) => handleCellClick(e, rowIndex, colIndex)}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {isCorrect && <>
                    <div className='success'>Вы решили нанограмму правильно!</div>
                    <button className='button-play' onClick={onPlayClick}>Играть снова</button>
                </>}
            </div>
        </div>
    );
};

export default Play;
