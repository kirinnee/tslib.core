import {Kore} from "./Kore";
import {SortType} from "./SortType";

declare global {
	interface String {
		
		// /**
		//  * Whether it has an extesion. ".txt", "abc/te.html" are files but "dockerfile" is not
		//  * */
		// IsFile(): boolean;
		//
		// /**
		//  * Whether file string contains a directory
		//  * */
		// HasDir(): boolean;
		//
		// /**
		//  * Gets the extension from the file string
		//  * */
		// GetExt(): string;
		//
		// /**
		//  * Gets the file name from the file string.
		//  * Returns empty string if there is no file name
		//  * */
		// GetName(): string;
		//
		// /**
		//  * Gets the directory from the file string.
		//  * Returns empty string if there is no file name
		//  * */
		// GetDir(): string;
		//
		// /**
		//  * Replace the extension with the replacement string
		//  * @param replacement extension to replace with
		//  */
		// ReplaceExt(replacement: string): string;
		//
		// /**
		//  * Modify the extension with rules defined by the modify function
		//  * @param modify the rule for modifying the extension.
		//  * Must take in a string and return a string.
		//  * The string taken in is the old string
		//  */
		// EditExt(modify: (s: string) => string): string;
		//
		// /**
		//  * Replace the name with the provided replacement string
		//  * @param replacement new name to be replaced
		//  */
		// ReplaceName(replacement: string): string;
		//
		// /**
		//  * Modfiy the name with rules defined by the modify function
		//  * @param modify the rule for modifying the file name.
		//  * Must take in a string and return a string.
		//  * The input argument i the old string
		//  */
		// EditName(modify: (s: string) => string): string;
		//
		// /**
		//  * Replace the directory with the replacement string
		//  * @param replacement the string to replace the current directory with
		//  */
		// ReplaceDir(replacement: string): string;
		//
		// /**
		//  * Modify the name with rules defined by the modify function
		//  * @param modify the rule for modifiny the diretory
		//  * Must take in a string and return a string.
		//  * The input argument is the old string
		//  */
		// EditDir(modify: (s: string) => string): string;
		//
		// /**
		//  * Formats the string as directory. Ends with "/" and does not start with "/"
		//  * */
		// FormatDir(): string;
		//
		// /**
		//  * Formats the string as a file. Ensures it does not start with "/"
		//  * */
		// FormatFile(): string;
		
		/**
		 * Returns an array of expressions that matches the regular expression
		 * @param regex the regex to match
		 * @constructor
		 */
		Match(regex: RegExp): string[];
		
		/**
		 * Replaces the regex search with desired replacement
		 * @param regex search
		 * @param replace replacement
		 */
		ReplaceAll(regex: string, replace: string): string;
		
		/**Whether the string is "" or when trimmed becomes "" */
		IsEmpty(): boolean;
		
		/**
		 * Check if the string starts with the certain string.
		 * Ignores starting spaces.
		 * @param start what the string is starting with
		 */
		Starts(start: string): boolean;
		
		/**
		 * Check if the string end with the certain string.
		 * Ignores starting spaces.
		 * @param end what the string is ending with
		 */
		Ends(end: string): boolean;
		
		/**
		 * Returns the character at the position. Negative numbers will count from the back
		 * @param val position
		 */
		CharAt(val: number): string;
		
		/**
		 * Remove character at the position
		 * Negative number will count from the back
		 * @param index position
		 */
		RemoveCharAt(index: number): string;
		
		/**
		 * Remove all occurrences of the search
		 * @param rmv search
		 */
		Remove(rmv: string): string;
		
		/**
		 * Remove all occurrences of each element in the array
		 * @param rmv the strings to remove
		 */
		Without(rmv: string[]): string;
		
		/**
		 * Skip the first X characters
		 * @param val x
		 */
		Skip(val: number): string;
		
		/**
		 * Returns first character of the string. Returns empty string is string is empty
		 * @constructor
		 */
		Take(): string
		
		/**
		 * Take the first x characters
		 * @param val x
		 */
		Take(val: number): string;
		
		/**
		 * Returns last character of the string. Returns empty string is string is empty
		 * @constructor
		 */
		Last(): string
		
		/**
		 * Take the last x characters
		 * @param val x
		 */
		Last(val: number): string;
		
		/**
		 * Remove the last x characters
		 * @param val x
		 */
		Omit(val: number): string;
		
		/**
		 * Repeat the string x amount of time
		 * @param val
		 */
		Repeat(val: number): string;
		
		/**
		 * Count the number of occurrence of the search target
		 * @param target search target
		 */
		Count(target: string): number;
		
		/**Convert the first character to uppercase, if possible */
		Capitalize(): string;
		
		/**Convert each word's first character to uppercase, if possible */
		CapitalizeWords(): string;
		
		/**Check if string is alphanumeric */
		IsAlphanumeric(): boolean;
		
		/**Check if string is hexadecimal */
		IsHexadecimal(): boolean;
		
		/**
		 * Unify lines break to \n and break them into array
		 * @constructor
		 */
		LineBreak(): string[];
		
		/**Converts to number as integer */
		ToInt(): number;
		
		/**Converts to number as float */
		ToFloat(): number;
		
		// /**
		//  * Escape the input character if it is escape-able
		//  * @param space whether to escape space
		//  */
		// EscapeChar(space: boolean): string;
		//
		// /**
		//  * Escape all HTML character
		//  * @param space whether to escape space
		//  */
		// EscapeHTML(space: boolean): string;
		//
		// // /**Break a HTML Escaped string to character arrays */
		// // BreakIntoArray(arr?: string[]): string[];
		//
		// /**
		//  * Wrap text in HTML tag
		//  * @param tag tag to wrap in
		//  */
		// WrapIn(tag: string): string;
		//
		// /**Remove anything after ? for a link */
		// RemoveURLVariable(): string;
		
		
	}
	
	interface Array<T> {
		
		/**
		 * Flattens the first tier of array
		 * @constructor
		 */
		Flatten<X>(): Array<X>;
		
		/**
		 * Merges two array as a Map.
		 * @param values the values to map to for each key
		 */
		Merge<V>(values: V[]): Map<T, V>;
		
		/**
		 * Execute a function on the current array to generate output for each element.
		 * The output is then used as the value used to make the map
		 * @param valueFunction function to convert each element to value element
		 */
		AsKey<V>(valueFunction: (value: T, index: number) => V): Map<T, V>;
		
		/**
		 * Executes a function on the current array to generate out for each element
		 * The output is then used as the key used to make the ap
		 * @param keyFunction function to convert each element to key element
		 */
		AsValue<K>(keyFunction: (value: T, index: number) => K): Map<K, T>;
		
		/**Trim every string in the array */
		TrimAll(): string[];
		
		/**
		 * Sorts the array
		 * @param type type of sorting
		 * @param Definier for objects, the function that converts the object to either a string or number to be used for sorting
		 */
		Sort(type: SortMethod, Definier?: (e: T) => (number | string)): T[];
		
		/**Reverses the order of the array */
		Reverse(): T[];
		
		/**
		 * Check if the array has the element.
		 * @param search element to search for
		 * @param deep whether to use deep equality or strict equality (default is strict)
		 */
		Has(search: T, deep?: boolean): boolean;
		
		/**
		 * Remove elements that do not fulfil the criteria
		 * Stateless operation.
		 * @param predicate criteria to fulfil
		 */
		Where(predicate: (e: T, i: number) => boolean): T[];
		
		/**
		 * Transform or modify the array by apply the function on each element
		 * Stateless operation
		 * @param application transformation or modification rule
		 */
		Map<X>(application: (e: T, i: number) => X): X[];
		
		/**
		 * Execute the application function for every element in the array, and return the current element.
		 * Transform the array with side effect
		 * @param application application function
		 * @param reverse iterate in reverse order. default false
		 */
		Each(application: (e: T, i: number) => void, reverse?: boolean): T[];
		
		/**
		 * Removes all occurence target element from the array
		 * Stateless operation
		 * @param target the element to be removed
		 * @param deep whether to use deep equality or strict equality (default is strict)
		 */
		RemoveValue(target: T, deep?: boolean): T[];
		
		/**
		 * Removes all elements within the target array from this array.
		 * Stateless operation
		 * @param w - target array of elements to remove from the array.
		 * @param deep whether to use deep equality or strict equality (default is strict)
		 */
		Without(w: T[], deep?: boolean): T[];
		
		/**
		 * Removes all the index that is the number array
		 * Stateless operation
		 * @param w index of elements to be removed
		 */
		WithoutIndex(w: number[]): T[];
		
		/**
		 * Fill a set amount of items in the array using the function to produce object base on index
		 * @param amount the number of elements to create
		 * @param fillFunction the function to convert index into objects
		 */
		Fill<T>(amount: number, fillFunction: (i: number) => T): T[];
		
		/**
		 * Remove a specific index of element from the array
		 * stateless oepration
		 * @param index index of element to remove
		 */
		RemoveIndex(index: number): T[];
		
		/**
		 * Takes the first element of the array.
		 * Returns null if array is empty
		 * @constructor
		 */
		Take(): T | null
		
		/**
		 * Take the first X element from the array
		 * Stateless operation
		 * @param val the number of elements to take
		 */
		Take(val: number): T[];
		
		/**
		 * Take while the predicate is true
		 * @param predicate condition
		 * @constructor
		 */
		TakeWhile(predicate: (e: T, i: number) => boolean): T[];
		
		/**
		 * Remove the first X element from the array
		 * Stateless Operation
		 * @param val - the number of element to remove
		 */
		Skip(val: number): T[];
		
		/**
		 * Skip the element while it fulfils the predicate is true
		 * @param predicate condition
		 * @constructor
		 */
		SkipWhile(predicate: (e: T, i: number) => boolean): T[];
		
		/**
		 * Removes the last X element from the array
		 * Stateless Operation
		 * @param val
		 */
		Omit(val: number): T[];
		
		/**
		 * Omit the element while the predicate is true
		 * @param predicate condition
		 * @constructor
		 */
		OmitWhile(predicate: (e: T, i: number) => boolean): T[];
		
		/**
		 * Returns the last element of the array. Returns null if array is empty
		 * @constructor
		 */
		Last(): T | null
		
		/**
		 * Returns the array with the last X elements
		 * Stateleess Operation
		 * @param val
		 */
		Last(val: number): T[];
		
		/**
		 * Take the last Element while the predicate is true
		 * @param predicate condition
		 * @constructor
		 */
		LastWhile(predicate: (e: T, i: number) => boolean): T[];
		
		/**
		 * Gets the first index that matches the search target
		 * Returns null if no target matches the target
		 * @param search the search target
		 * @param deep whether to use deep equality or strict equality (default is strict)
		 */
		FirstIndexOf(search: T, deep?: boolean): number | null;
		
		/**
		 * Count the number of elements that matches the search
		 * @param search the search target
		 * @param deep whether to use deep equality or strict equality (default is strict)
		 */
		Count(search: T, deep?: boolean): number;
		
		/**
		 * Gets an array of indexes that returns elements that match the search target
		 * @param search the search target
		 * @param deep whether to use deep equality or strict equality (default is strict)
		 */
		Indexes(search: T, deep?: boolean): number[];
		
		/**Remove duplicate elements that have the same pointer (strict equality)
		 * @param deep whether to use deep equality or strict equality (default is strict)
		 * */
		Unique(deep?: boolean): T[];
		
		/**
		 * Merges the two array, removing dulpicate values that have same pointer
		 * Uses strict eqaulity (pointer check)
		 * Stateless operation
		 * @param target
		 * @param deep whether to use deep equality or strict equality (default is strict)
		 */
		Union(target: T[], deep?: boolean): T[];
		
		/**
		 * Generates an array that contains elements that both array has.
		 * Uses strict equality (pointer check)
		 * @param target
		 * @param deep whether to use deep equality or strict equality (default is strict)
		 */
		Intersect(target: T[], deep?: boolean): T[];
		
		/**
		 * Generates an array that contains the merge of elements that are exclusive to both arrays
		 * Uses strict check (pointer check)
		 * @param target
		 * @param deep whether to use deep equality or strict equality (default is strict)
		 */
		Outer(target: T[], deep?: boolean): T[];
		
		/**
		 * Find the target with the largest score
		 * @param f scoring algorithm
		 * @constructor
		 */
		Max(f?: (t: T, i: number) => number): T;
		
		/**
		 * @param f scoring algorithm
		 * @constructor
		 */
		Min(f?: (t: T, i: number) => number): T;
		
		/**
		 * Sums the score of the array using strategy
		 * @param f strategy
		 * @constructor
		 */
		Sum(f?: (t: T, i: number) => number): number;
		
		/**
		 * Reduces the array by performing the reducing function on 2 neighbouring element continuously
		 * @param r reducing algorithm
		 * @constructor
		 */
		Reduce(r: (a: T, b: T, i: number) => T): T
		
		/**
		 * Gets the first element that fulfils the predicate
		 * @param predicate condition
		 * @constructor
		 */
		Find(predicate: (e: T, i: number) => boolean): T | null;
		
		/**
		 * Gets the index of the first element that fulfils the predicate
		 * @param predicate condition
		 * @constructor
		 */
		FindIndex(predicate: (e: T, i: number) => boolean): number | null;
		
		/**
		 * Check if at least one of the element fulfils the predicate
		 * @param predicate condition
		 * @constructor
		 */
		Any(predicate: (e: T, i: number) => boolean): boolean;
		
		/**
		 * Check if all the element fulfills the predicate
		 * @param predicate
		 * @constructor
		 */
		All(predicate: (e: T, i: number) => boolean): boolean;
		
		/**
		 * Execute function when the predicate is true.
		 * if ifTrue function returns value, the function will return value.
		 * if all fails, return undefined
		 * @param predicate condition
		 * @param ifTrue function to execute when true. Will yield return if return is not undefined
		 * @param breakWhenFalse whether to break when false
		 * @constructor
		 */
		When(predicate: (e: T, i: number) => boolean, ifTrue: (e: T, i: number) => any, breakWhenFalse?: boolean): any
		
		/**
		 * Returns random element array of element
		 * @constructor
		 */
		Random(): T | null;
		
	}
	
	interface Map<K, V> {
		
		/**
		 * Delegate
		 * @param method name to delegate to array
		 * @param arg args to delegate
		 * @constructor
		 */
		D(method: string, ...arg: any[]): Map<K, V>;
		
		/**Trim all string values of the map */
		TrimValue(): Map<K, string>;
		
		/**
		 * Sort the map by key
		 * @param type type of sorting
		 * @param Definer Conversion function to convert object to representive strings or number to be used for sorting
		 */
		SortByKey(type: SortMethod, Definer?: (k: K) => (number | string)): Map<K, V>;
		
		/**
		 * Sort the map by value
		 * @param type type of sorting
		 * @param Definer Coversion function to convert object to represntive strings or number to be used for sorting
		 */
		SortByValue(type: SortMethod, Definer?: (i: V) => (number | string)): Map<K, V>;
		
		/**Reverse the order of the map */
		Reverse(): Map<K, V>
		
		/**
		 * Check if the map has the key
		 * @param search the target to search for
		 * @param deep whether to use deep or strict check (def is strict)
		 */
		HasKey(search: K, deep?: boolean): boolean;
		
		/**
		 * Check if the map has the value
		 * @param search search target
		 * @param deep whether to use deep or strict check (def is strict)
		 */
		HasValue(search: V, deep?: boolean): boolean;
		
		/**
		 * Filter the map using a predicate function
		 * @param predicate the function to decide whether the entry should remain. K for current key, V for current value
		 */
		Where(predicate: (k: K, v: V) => boolean): Map<K, V>;
		
		/**
		 * Maps or modify the key base on transformation/mapping function
		 * @param transform the function to apply on each element
		 */
		MapKey<T>(transform: (k: K, v: V) => T): Map<T, V>;
		
		/**
		 * Maps or modify the value base on transformation/mapping function
		 * @param transform the function to apply on each element
		 */
		MapValue<T>(transform: (v: V, k: K) => T): Map<K, T>;
		
		/**
		 * Maps the map into an array base on mapping/transformation function
		 * @param transform the function to apply on each entry
		 */
		Map<T>(transform: (k: K, v: V) => T): T[];
		
		/**
		 * Maps the map into a new map base on side-effect transform function
		 * @param transform the function toapply on each entry
		 */
		Each(transform: (k: K, v: V) => void): Map<K, V>;
		
		/**
		 * Remove the provided key
		 * @param key entry to remove with key
		 * @param deep whether to use deep or strict check (def is strict)
		 */
		RemoveKey(key: K, deep?: boolean): Map<K, V>
		
		/**
		 * Remove the provided value
		 * @param val entry to remove with val
		 * @param deep whether to use deep or strict check (def is strict)
		 */
		RemoveValue(val: V, deep?: boolean): Map<K, V>
		
		/**
		 * Return a map without the specified keys and values
		 * @param keys keys to be removed
		 * @param values values to be removed
		 * @param deep whether to use deep or strict checks (def is strict)
		 * @constructor
		 */
		Without(keys: K[], values: V[], deep?: boolean): Map<K, V>
		
		/**
		 * Takes the first entry of the map, returns null if it doesn't exist
		 * @constructor
		 */
		Take(): { key: K, value: V } | null;
		
		/**
		 * Takes the first x element of the map
		 * @param val x
		 */
		Take(val?: number): Map<K, V>;
		
		/**
		 * Takes the element while it fulfills while it fulfils the predicate
		 * @param predicate condition
		 * @constructor
		 */
		TakeWhile(predicate: (k: K, v: V) => boolean): Map<K, V>;
		
		/**
		 * Remove the x element of the map
		 * @param val x
		 */
		Skip(val: number): Map<K, V>;
		
		/**
		 * Skips the element while it fulfills while it fulfils the predicate
		 * @param predicate condition
		 * @constructor
		 */
		SkipWhile(predicate: (k: K, v: V) => boolean): Map<K, V>;
		
		/**
		 * Remove the last x element of the map
		 * @param val x
		 */
		Omit(val: number): Map<K, V>;
		
		/**
		 * Omits each element while the element fulfils the predicate
		 * @param predicate condition
		 * @constructor
		 */
		OmitWhile(predicate: (k: K, v: V) => boolean): Map<K, V>
		
		/**
		 * Returns the last value of the map
		 * @constructor
		 */
		Last(): null | { key: K, value: V };
		
		/**
		 * Take the last x element of the map.
		 * @param val x
		 */
		Last(val: number): Map<K, V>;
		
		/**
		 * Takes the each last element while elements fulfils the predicate
		 * @param predicate
		 * @constructor
		 */
		LastWhile(predicate: (k: K, v: V) => boolean): Map<K, V>
		
		/**Converts the map to entry array */
		Arr(): [K, V][];
		
		/**
		 * Gets the keys as an array
		 * @constructor
		 */
		Keys(): K[];
		
		/**
		 * Gets the values as an array
		 * @constructor
		 */
		Values(): V[];
		
		/**
		 * Get the first key that matches the predicate
		 * @param predicate condition
		 * @constructor
		 */
		Find(predicate: (k: K, v: V) => boolean): { key: K, value: V } | null;
		
		/**
		 * Get the entry with the largest score
		 * @param f scoring strategy
		 * @constructor
		 */
		Max(f: (k: K, v: V) => number): { key: K, value: V };
		
		/**
		 * Get the entry with the smallest score
		 * @param f scoring strategy
		 * @constructor
		 */
		Min(f: (k: K, v: V) => number): { key: K, value: V };
		
		/**
		 * Get the summation of the collection using the strategy
		 * @param f scoring strategy
		 * @constructor
		 */
		Sum(f?: (k: K, v: V) => number): number;
		
		/**
		 * Reduces the map using the reduce function
		 * @param r reduce function
		 * @constructor
		 */
		Reduce(r: (aV: { key: K, value: V }, bV: { key: K, value: V }) => { key: K, value: V }): { key: K, value: V };
		
		/**
		 * Check if any of the entry fulfils the predicate
		 * @param predicate condition
		 * @constructor
		 */
		Any(predicate: (k: K, v: V) => boolean): boolean;
		
		/**
		 * Check if all of the entry fulfils the predicate
		 * @param predicate condition
		 * @constructor
		 */
		All(predicate: (k: K, v: V) => boolean): boolean;
		
		
	}
	
	interface Number {
		
		/**Check if it is odd.
		 * Floating points and 0 are not odd.
		 * Infinity is not odd */
		Odd(): boolean;
		
		/**Check if it is even.
		 * Floating points and 0 are not even.
		 * Infinity is not even */
		Even(): boolean;
		
		/**Check if number is integer
		 * Inifinity is not a integer*/
		Int(): boolean;
		
		/**Check if number is finite. NaN is not finite */
		Finite(): boolean;
		
		/**Check if number is infinite. NaN is not infinite */
		Infinite(): boolean;
		
		/**Check if number is NaN. inifinity is a number */
		NaN(): boolean;
		
		/**Rounds off the number.
		 * Round towards inifinity or negative inifinity if its it 0.5 and above
		 * Round towrard zero if it is below 0.5
		 * Returns same value if number is not finite*/
		RoundOff(): number;
		
		/**Rounds the number towards 0
		 Returns same value if number is not finite*/
		Floor(): number;
		
		/**Rounds the number towards infinity or negative infinity
		 Returns same value if number is not finite*/
		Ceil(): number;
		
		/**Returns a non-negative number.
		 * Cannot aboslute inifinity*/
		Abs(): number;
		
		/**Gets the square root of a number
		 * Cannot square root negative number
		 * Cannot square root inifinity*/
		Root(): number;
		
		/**Converts string or number to int, if format is valid
		 * Throws exception if number or string is not valid*/
		ToInt(): number;
		
		/**Converts string or number to float, if format is valid
		 * Throws exception if number or string is not valid*/
		ToFloat(): number;
		
		/**
		 * Make sure this number does not exceed the max value.
		 * @param max the max number
		 */
		AtMax(max: number): number;
		
		/**
		 * Make sure this number does not fall below the stated value
		 * @param min  the minimum the number has to be
		 */
		AtMin(min: number): number;
		
		/**
		 * Clamps the number between the two values
		 * @param constrain1 one side of the constrain
		 * @param constrain2 the other side of the constrain
		 */
		Clamp(constrain1: number, constrain2: number): number;
		
		/**
		 * Generates a random number between the host number and the provided number
		 * @param to maximum random number to generate
		 * @param integer whether to make it integer
		 */
		RandomTo(to: number, integer?: boolean): number;
		
		/**
		 * Generates n-number of possible random numbers from the starting value.
		 * ie 5.Random for 10 would give random number between 5 and 14 (both inclusive)
		 * @param n the number of possiblity
		 * @param integer whether to round as interger
		 */
		RandomFor(n: number, integer?: boolean): number;
		
		// /**
		//  * Generates random number with the starting value as mid point.
		//  * The range of possible output is will be divided equally before and after the midpoint
		//  * @param range number of possilibty
		//  * @param integer whether to round as integer
		//  */
		// RandomAround(range: number, integer?: boolean): number;
		
	}
	
	interface SortMethod {
		IsNum: boolean;
	}
}

interface Core {
	// readonly SPACE: string;
	// readonly LEFT_TAG: string;
	// readonly RIGHT_TAG: string;
	// readonly AMPERSAND: string;
	// readonly SINGLE_QUOTE: string;
	// readonly DOUBLE_QUOTE: string;
	
	IsExtended: boolean;
	
	/**
	 * Assert that core has been extended, throws an error if core is not extended
	 * @constructor
	 */
	AssertExtend(): void;
	
	/**
	 * Check typeof variable is string
	 * @param any
	 * @constructor
	 */
	IsAnyString(any: any): boolean;
	
	/**
	 * Check if its a string and not an trimmed empty string
	 * @param any
	 * @constructor
	 */
	IsString(any: any): boolean;
	
	/**
	 * Check if its typeof is number
	 * @param any
	 * @constructor
	 */
	IsAnyNumber(any: any): boolean;
	
	/**
	 * Check if its a usable number
	 * Ensure not infinity and not NaN
	 * @param any - target to check
	 * @param allowString where to parse strings, default false
	 * @constructor
	 */
	IsNumber(any: any, allowString?: boolean): boolean;
	
	/**
	 * Check if 2 objects are deeply equal
	 * @param a first object
	 * @param b second object
	 * @constructor
	 */
	DeepEqual(a: any, b: any): boolean;
	
	/**
	 * Check if target is number array
	 * @param arr array
	 * @constructor
	 */
	IsNumberArray(arr: any[]): arr is number[];
	
	/**
	 * Check if target is string arr
	 * @param arr - arr
	 * @constructor
	 */
	IsStringArray(arr: any[]): arr is string[];
	
	/**
	 * Check if target is boolean array
	 * @param arr
	 * @constructor
	 */
	IsBooleanArray(arr: any[]): arr is boolean[];
	
	/**
	 * Wrap the target as a single element array if its not already an array
	 * @param arr
	 * @constructor
	 */
	WrapArray<T>(arr: T | T[]): T[];
	
	/**
	 * Check if target is an array
	 * @param arr
	 * @constructor
	 */
	IsArray(arr: any): boolean;
	
	/**
	 * Equality check helper
	 * @param a first object to compare
	 * @param b second object to compare
	 * @param deep whether to use deep comparison
	 * @constructor
	 */
	Eq(a: any, b: any, deep: boolean): boolean;
	
	/**
	 * Generate random string with N length
	 * @param N length of the string
	 * @constructor
	 */
	Random(N: number): string;
	
	ExtendPrimitives(): void;
}

export {Core, Kore, SortType}