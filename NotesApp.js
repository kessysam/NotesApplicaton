
/**
*This program is a simple NoteApplication archive
*/

 class NotesApplication {
 	
 	
 	
 	/**
 	*@param {String} author
 	*/
 	constructor(author) {
 		this.author = author;
 		this.noteList = [];
 	}

 	/**
 	* This function takes the note content as the parameter
 	* and adds it to the notes list of the object.
 	* @param note_content
 	*/
 	create(note_content){
 		
 		this.noteList = note_content;
 		
 	}

 		
 	/**
 	*This function lists out each of the notes in the notes list 
 	*/
 	listNotes(){
 		
 		if(this.notes.length !== null){
 			
 			console.log("Notes "+notes[note_id]+" by"+" Author "+author);
 			
 		}else{
 			return null;
 		}
 		
 	}
 	
 }