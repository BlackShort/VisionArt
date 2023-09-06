import { SurpriseMePrompts } from '../Constants/index';
import FileSaver from 'file-saver';


export const GetRandomPrompt = (prompt) => {
    const randomIndex = Math.floor(Math.random() * SurpriseMePrompts.length);
    const randomPrompt = SurpriseMePrompts[randomIndex];

    if (randomPrompt == prompt) return GetRandomPrompt(prompt);

    return randomPrompt;
}

export const downloadImg = (photoimg, imgprompt) =>{
    FileSaver.saveAs(photoimg, (imgprompt || "VisionArt.jpg"));
}


