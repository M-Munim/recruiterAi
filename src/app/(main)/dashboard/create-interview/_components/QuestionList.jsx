// import axios from 'axios';
// import { Loader2Icon } from 'lucide-react';
// import React, { useEffect, useState } from 'react'
// import { toast } from 'sonner';

// const QuestionList = ({ formData }) => {
//     const [loading, setLoading] = useState(false);
//     const [questionList, setQuestionList] = useState();

//     useEffect(() => {
//         if (formData.jobPosition && formData.jobDescription && formData.duration && formData.type) {
//             GenerateQuestionList();
//         }
//     }, [formData])


//     const GenerateQuestionList = async () => {
//         setLoading(true);

//         try {
//             const result = await axios.post('/api/ai-model', {
//                 ...formData
//             });
//             console.log(result.data);
//             const Content = result.data.content;
//             const FINAL_CONTENT = Content.replace('"```json', '').replace('```"', '');
//             setQuestionList(JSON.parse(FINAL_CONTENT)?.interviewQuestions);
//             setLoading(false);

//         } catch (error) {
//             toast("Server Error Try Again");
//             setLoading(false);
//         }
//     }

//     return (
//         <div>
//             {loading && <div className='p-5 bg-gray-200 rounded-xl border border-gray-200 flex gap-5 items-center'>
//                 <Loader2Icon className='animate-spin' />

//                 <div>
//                     <h2>Generating Questions</h2>
//                     <p>Our AI is crafting personalized questions for your interview.</p>
//                 </div>
//             </div>}

//             {/* {questionList?.length > 0 &&
//                 <div className='p-5 border border-gray-300 rounded-xl'>
//                     {questionList.map((item, index) => (
//                         <div key={index} className='p-3 border border-gray-200 rounded-xl'>
//                             <h2 className='font-medium'>{item.question}</h2>
//                             <h2 className=''>Type: {item?.type}</h2>

//                         </div>
//                     ))}
//                 </div>

//             } */}
//         </div>
//     )
// }

// export default QuestionList


import { Button } from '@/components/ui/button';
import axios from 'axios';
import { Loader2Icon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import QuestionListContainer from './QuestionListContainer';
import { useUser } from '@/app/provider';
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '../../../../../../services/supabaseClient';

const QuestionList = ({ formData }) => {
    const [loading, setLoading] = useState(false);
    const [questionList, setQuestionList] = useState([]);
    const { user } = useUser();
    const [saveLoading, setSaveLoading] = useState(false);

    useEffect(() => {
        if (formData.jobPosition && formData.jobDescription && formData.duration && formData.type) {
            GenerateQuestionList();
        }
    }, [formData]);

    const GenerateQuestionList = async () => {
        setLoading(true);
        try {
            const result = await axios.post('/api/ai-model', {
                ...formData
            });
            console.log(result.data);

            const Content = result.data.content;
            const FINAL_CONTENT = Content.replace('```json', '').replace('```', '').trim();
            const parsed = JSON.parse(FINAL_CONTENT);
            setQuestionList(parsed?.interviewQuestions || []);
        } catch (error) {
            toast("Server Error. Try Again.");
        } finally {
            setLoading(false);
        }
    };

    const onFinish = async () => {
        setSaveLoading(true);
        const interview_id = uuidv4();
        const { data, error } = await supabase
            .from('Interviews')
            .insert([
                {
                    ...formData,
                    questionList: questionList,
                    userEmail: user?.email,
                    interview_id: interview_id
                },
            ])
            .select()
        setSaveLoading(false);

        console.log(data, error);
    };

    return (
        <div className='space-y-4'>
            {loading && (
                <div className='p-5 bg-gray-100 rounded-xl border flex gap-4 items-center'>
                    <Loader2Icon className='animate-spin text-gray-700' />
                    <div>
                        <h2 className='font-semibold'>Generating Questions...</h2>
                        <p className='text-sm text-gray-500'>
                            Our AI is crafting personalized questions for your interview.
                        </p>
                    </div>
                </div>
            )}

            {!loading && questionList.length > 0 && (
                <div>
                    <QuestionListContainer questionList={questionList} />
                </div>
            )}

            <div className='flex justify-end mt-10'>
                <Button onClick={() => onFinish()} disabled={saveLoading} >
                    {saveLoading && <Loader2Icon className='animate-spin mr-2' />}

                    Finish</Button>
            </div>
        </div>
    );
};

export default QuestionList;
