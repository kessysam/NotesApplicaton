
/**
*This program is a simple NoteApplication archive
*/

 class NotesApplication {
 	
 	
 	
 	/**
 	*@param {String} author
 	* @param {String} notes
 	*/
 	constructor(author) {
 		this.author = author;
 		this.notes = [];
 	}
 	
 	
 	/**
 	* This function takes the note content
 	* as the parameter
 	* and adds it to the notes list of the object.
 	* @param note_content
 	*/
 	create(note_content) {
 		
 		this.author = note_content;
 		
 	}
 	
 	
 	/**
 	*This function lists out each of the notes in the notes list 
 	*/
 	listNotes() {
 		
 		if(this.notes.length !== null) {
 			if(get(note_id)) {	
 				console.log("Notes " + get(note_id) + " by" + " Author "+author);
 			}
 			
 		} else {
 			return null;
 		}
 		
 	}
 	
 	/**
 	* This function takes a note_id which refers to the index of the note in the notes list
 	* and returns the content of that note as a string.
 	* @param note_id
 	*/
 	
 	get(note_id) {
 		
 		if(indexOf(note_id === -1)){
 			return notes[note_id];
 		}
 		
 		return false;	
 	}
 	
 }