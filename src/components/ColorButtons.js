import COLORS from '../data/colors.json';
import ColorChoice from './ColorChoice'

const ColorButtons = ({onChange}) => {
    return (
        <section>
        {COLORS.map((color)=>
                <ColorChoice 
                    key={color.id} 
                    colorName={color.colorName}
                    emoji={color.emoji} 
                    onChange={onChange}
                />)
        }
        </section>
    );
};

export default ColorButtons;