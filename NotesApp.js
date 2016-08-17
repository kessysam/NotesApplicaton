
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
 		this.index = 0;
 	}
 	
 	
 	/**
 	* This function takes the note content
 	* as the parameter
 	* and adds it to the notes list of the object.
 	* @param {String} note_content
 	*/
 	create(note_content) {
 		
 		this.notes.push(note_content.toString());
 	}
 	
 	
 	/**
 	*This function lists out each of the notes in the notes list 
 	*/
 	listNotes() {
 		
 		if(this.notes.length !== 0) {
 			if(get(note_id)) {	
 				console.log("Notes " + get(note_id) + " by" + " Author "+this.author);
 			}
 			
 		} else {
 			return null;
 		}
 		
 	}
 	
 	/**
 	* This function takes a note_id which refers to the index of the note in the notes list
 	* and returns the content of that note as a string.
 	* @param {Integer} note_id
 	*/
 	
 	getNote(note_id) {
 		
 		if(indexOf(note_id) !== -1){
 			return this.notes[note_id];
 		}
 		
 		return false;	
 	}
 	
 	/**
 	*This function take a search string, search_text and returns all the notes with that text within it
 	* @param {string} search_text
 	*/
 	
 	searchText(search_text) {
 		
 		let foundText;
 		
 		if(search_text.length !== 0){
 					
 			for(i = 0; i < this.notes.length; i++) {
 				
 				if(search_text === this.notes[i]){
 					
 					foundText += " "+this.notes[i];
 					
 				}
 			}
 		}
 	}
 	
	/**
	*This function deletes the note at the index note_id of the notes list
	*@param {Integer} note_id
	*/
	deleteNote(note_id) {

		if(this.notes[note_id]!== undefined) {
			delete this.notes[note_id];
		}
	}
	/**
	*This function replaces the content in the note at note_id with new_content
	*@param note_id
	*@param new_content
	*/
	edit(note_id, new_content) {
		
		if(this.notes[note_id]!== undefined) {
			this.notes[note_id] = new_content.toString();
		}
	}

}