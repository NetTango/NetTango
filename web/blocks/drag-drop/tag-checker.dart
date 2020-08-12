/*
 * NetTango
 * Copyright (c) 2020 Michael S. Horn, Uri Wilensky, and Corey Brady
 *
 * Northwestern University
 * 2120 Campus Drive
 * Evanston, IL 60613
 * http://tidal.northwestern.edu
 * http://ccl.northwestern.edu

 * This project was funded in part by the National Science Foundation.
 * Any opinions, findings and conclusions or recommendations expressed in this
 * material are those of the author(s) and do not necessarily reflect the views
 * of the National Science Foundation (NSF).
 */

part of NetTango;

class TagChecker {

  static bool containsAny(List<String> allowedTags, List<String> tags) {
    for (String tag in tags) {
      if (allowedTags.contains(tag)) {
        return true;
      }
    }
    return false;
  }

  static bool isSatisfied(List<String> allowedTags, Iterable<Block> blocks) {
    if (allowedTags.isEmpty) {
      return true;
    }
    final areBlocksAllowed = blocks.map( (block) => containsAny(allowedTags, block.tags) );
    return areBlocksAllowed.reduce( (a, b) => a && b );
  }

}
