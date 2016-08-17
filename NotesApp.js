
/**
*This program is a simple NoteApplication archive
*/

 class NotesApplication {
 	
 	
 	
 	/**
 	*@param {String} author
 	*/
 	constructor(author) {
 		this.author = author;
 		this.notes = [];
 	}

 	/**
 	* This function takes the note content as the parameter
 	* and adds it to the notes list of the object.
 	* @param note_content
 	*/
 	create(note_content){
 		
 		this.author = note_content;
 		
 	}

 	listNotes(){

 		
 	}|
 
 }