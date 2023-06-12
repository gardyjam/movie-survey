import Likert from 'react-likert-scale';
import './LikertScaleQuestion.css';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating/Rating';
import CircleIcon from '@mui/icons-material/Circle';
import { width } from '@mui/system';

function LikertScaleQuestion ({ question, questionId, onChange }) {

  const [value, setValue] = useState(null);

  const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
      color: theme.palette.action.disabled,
    },
  }));
  
  const customIcons = {
    1: {
      icon: <CircleIcon/>,
      label: 'Zdecydowanie się nie zgadzam',
    },
    2: {
      icon: <CircleIcon />,
      label: 'Nie zgadzam się',
    },
    3: {
      icon: <CircleIcon />,
      label: 'Trudno powiedzieć',
    },
    4: {
      icon: <CircleIcon />,
      label: 'Zgadzam się',
    },
    5: {
      icon: <CircleIcon/>,
      label: 'Zdecydowanie się zgadzam',
    },
  };

  function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  }
  

    return (
      <div className='linkert'>
        <text className='question'>{question}</text>
        <br></br>
        <StyledRating
          name="highlight-selected-only"
          size='large'
          defaultValue={3}
          IconContainerComponent={IconContainer}
          getLabelText={(value) => customIcons[value].label}
          highlightSelectedOnly
          sx = {{
            color:'black',
          }}
          onChange={onChange}
        />
        <br></br>
        {/* <span>{customIcons[5].label}</span>{customIcons[4].label}<span>{customIcons[3].label}</span><span>{customIcons[2].label}</span><span>{customIcons[1].label}</span> */}
      </div>
    );
  
}
export default LikertScaleQuestion
//   const [selectedValue, setSelectedValue] = useState(null);

//   // const handleResponseChange = (value) => {
//   //   setSelectedValue(value);
//   //   console.log(value);
//   // };

//   const likertOptions = {
//     question: question,
//     questionId: questionId,
//     responses: responses.length > 0 ? responses : defaultResponses.map((response, index) => ({
//       value: response.value,
//       text: response.text,
//       checked: response.checked || false,
//       element: <span>{response.text}</span> // Wyświetlanie tekstu pod kropkami
//     })),
//     onChange: val => {
//       onChange(questionId, val);
//       console.log(val);
//     }
//   };
  
//   return <Likert
//            {...likertOptions} 
//            onChange={onChange}
//            className="likert" 
//            />;
// };
//   return (
//     <div className='likert'>
//       <text className='question'> {question} </text>
//       <br></br>
//       <Rating 
//         name="no-value" 
//         value={null} 
//         onChange={
//           (event, newValue) => {
//             setValue(newValue);
//           }
//         }
//         highlightSelectedOnly
//       />
//     </div>  
//   );
// }; 
