describe("Select Plugin", () => {
  beforeEach(() => {
    loadFixtures('select/selectFixture.html');
    $('select').select();
  });

  describe("Select", () => {
    var browserSelect, normalInput, normalDropdown;

    beforeEach(() => {
      browserSelect = $('select.normal');
    });

    it("should open dropdown and select option", done => {
      normalInput = browserSelect.parent().find('input.select-dropdown');
      normalDropdown = browserSelect.parent().find('ul.select-dropdown');

      expect(normalInput).toExist('Should dynamically generate select dropdown structure.');
      expect(normalDropdown).toExist('Should dynamically generate select dropdown structure.');
      expect(normalInput).toBeVisible('Should be visible before dropdown is opened.');
      expect(normalDropdown).toBeHidden('Should be hidden before dropdown is opened.');

      click(normalInput[0]);

      setTimeout(function() {
        expect(normalDropdown).toBeVisible('Should be visible after opening.');
        var firstOption = normalDropdown.find('li:not(.disabled)').first();
        click(firstOption[0]);
        normalInput.blur();

        setTimeout(function() {
          expect(normalDropdown).toBeHidden('Should be hidden after choosing item.');
          expect(normalInput.val()).toEqual(firstOption.text(), 'Value should equal chosen option.');
          done();
        }, 400);
      }, 400);
    });

    it("should have pre-selected value", () => {
      normalInput = browserSelect.parent().find('input.select-dropdown');
      normalDropdown = browserSelect.parent().find('ul.select-dropdown');

      var firstOption = browserSelect.find('option[selected]');
      expect(normalInput.val()).toEqual(firstOption.text(), 'Value should be equal to preselected option.');
    });
  });

  describe("Multiple Select", () => {
    var browserSelect, multipleInput, multipleDropdown;

    beforeEach(() => {
      browserSelect = $('select.multiple');
    });

    it("should open dropdown and select multiple options", done => {
      multipleInput = browserSelect.parent().find('input.select-dropdown');
      multipleDropdown = browserSelect.parent().find('ul.select-dropdown');

      expect(multipleInput).toExist('Should dynamically generate select dropdown structure.');
      expect(multipleDropdown).toExist('Should dynamically generate select dropdown structure.');
      expect(multipleInput).toBeVisible('Should be visible before dropdown is opened.');
      expect(multipleDropdown).toBeHidden('Should be hidden before dropdown is opened.');

      click(multipleInput[0]);

      setTimeout(function() {
        expect(multipleDropdown).toBeVisible('Should be visible after opening.');
        var firstOption = multipleDropdown.find('li:not(.disabled)').first();
        var secondOption = multipleDropdown.find('li:not(.disabled)').eq(1);
        var thirdOption = multipleDropdown.find('li:not(.disabled)').eq(2);
        click(firstOption[0]);
        click(document.body);

        setTimeout(function() {
          expect(multipleDropdown).toBeHidden('Should be hidden after choosing item.');
          expect(browserSelect.val()).toEqual(['1', '2', '3'], 'Actual select should have correct selected values.');
          expect(multipleInput.val()).toEqual(firstOption.text() + ', ' + secondOption.text() + ', ' + thirdOption.text(), 'Value should equal chosen multiple options.');
          done();
        }, 400);
      }, 400);
    });

    it("should open dropdown and deselect multiple options", done => {
      multipleInput = browserSelect.parent().find('input.select-dropdown');
      multipleDropdown = browserSelect.parent().find('ul.select-dropdown');

      expect(multipleInput).toExist('Should dynamically generate select dropdown structure.');
      expect(multipleDropdown).toExist('Should dynamically generate select dropdown structure.');
      expect(multipleInput).toBeVisible('Should be hidden before dropdown is opened.');
      expect(multipleDropdown).toBeHidden('Should be hidden before dropdown is opened.');

      click(multipleInput[0]);

      setTimeout(function() {
        expect(multipleDropdown).toBeVisible('Should be visible after opening.');
        var disabledOption = multipleDropdown.find('li.disabled');
        var secondOption = multipleDropdown.find('li:not(.disabled)').eq(1);
        var thirdOption = multipleDropdown.find('li:not(.disabled)').eq(2);

        click(secondOption[0]);
        click(thirdOption[0]);
        click(document.body);


        setTimeout(function() {
          expect(multipleDropdown).toBeHidden('Should be hidden after choosing item.');
          expect(browserSelect.val()).toEqual([], 'Actual select element should be empty because none chosen.');
          expect(multipleInput.val()).toEqual(disabledOption.text(), 'Value should equal default because none chosen.');
          done();
        }, 400);
      }, 400);
    });

    it("should have multiple pre-selected values", () => {
      multipleInput = browserSelect.parent().find('input.select-dropdown');
      multipleDropdown = browserSelect.parent().find('ul.select-dropdown');

      var secondOption = browserSelect.find('option[selected]').eq(0);
      var thirdOption = browserSelect.find('option[selected]').eq(1);
      expect(multipleInput.val()).toEqual(secondOption.text() + ', ' + thirdOption.text(), 'Value should be equal to preselected option.');
    });
  });

  describe("Optgroup Select", () => {
    var browserSelect, optInput, optDropdown, optionInOptgroup, optionAfterOptGroup;

    beforeEach(() => {
      browserSelect = $('select.optgroup');
    });

    it("should open dropdown and select options", done => {
      optInput = browserSelect.parent().find('input.select-dropdown');
      optDropdown = browserSelect.parent().find('ul.select-dropdown');

      var optgroups = optDropdown.find('li.optgroup');
      browserSelect.find('optgroup').each(function(i) {
        expect($(this).attr('label')).toEqual(optgroups.eq(i).text(), 'should generate optgroup structure.');
      });

      expect(optInput).toExist('Should dynamically generate select dropdown structure.');
      expect(optDropdown).toExist('Should dynamically generate select dropdown structure.');
      expect(optInput).toBeVisible('Should be hidden before dropdown is opened.');
      expect(optDropdown).toBeHidden('Should be hidden before dropdown is opened.');

      optInput.click();

      setTimeout(function() {
        expect(optDropdown).toBeVisible('Should be visible after opening.');
        var secondOption = optDropdown.find('li:not(.disabled):not(.optgroup)').eq(1);
        secondOption.click();
        optInput.blur();

        setTimeout(function() {
          expect(optDropdown).toBeHidden('Should be hidden after choosing item.');
          expect(optInput.val()).toEqual(secondOption.text(), 'Value should be equal to selected option.');
          done();
        }, 400);
      }, 400);
    });

    it("should have options inside optgroup indented", () => {
      optionInOptgroup = browserSelect.parent().find('li.optgroup + li');
      optionAfterOptGroup = browserSelect.parent().find('ul li:last-child');

      expect(optionInOptgroup).toHaveClass('optgroup-option', 'Should have optgroup-option class');
      expect(optionAfterOptGroup).not.toHaveClass('optgroup-option', 'Should not have optgroup-option class');
    });

    it("should not do anything when optgroup li clicked", done => {
      optInput = browserSelect.parent().find('input.select-dropdown');
      optDropdown = browserSelect.parent().find('ul.select-dropdown');
      var originalVal = optInput.val();

      var optgroups = optDropdown.find('li.optgroup');
      browserSelect.find('optgroup').each(function(i) {
        expect($(this).attr('label')).toEqual(optgroups.eq(i).text(), 'should generate optgroup structure.');
      });

      expect(optInput).toExist('Should dynamically generate select dropdown structure.');
      expect(optDropdown).toExist('Should dynamically generate select dropdown structure.');
      expect(optInput).toBeVisible('Should be hidden before dropdown is opened.');
      expect(optDropdown).toBeHidden('Should be hidden before dropdown is opened.');

      optInput.click();

      setTimeout(function() {
        expect(optDropdown).toBeVisible('Should be visible after opening.');
        var optgroup = optDropdown.find('li.optgroup').first();
        optgroup.click();
        optInput.blur();

        setTimeout(function() {
          expect(optDropdown).toBeHidden('Should be hidden after choosing invalid item.');
          expect(optInput.val()).toEqual(originalVal, 'Value should be equal to original option.');
          done();
        }, 400);
      }, 400);
    });

  });
});
